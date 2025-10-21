The Safra Fácil Platform serves as the foundation for the implementation of the Vegetation Health Monitoring (NDVI) feature. This functionality is a key component of the strategic expansion of the broader agricultural intelligence platform, WindWhisper, into its second pillar: Crop Health & Resource Management.
The goal of Safra Fácil is to provide Brazilian farmers with actionable intelligence by transforming complex NASA satellite data into real-time crop health insights.
Core Purpose and Market Strategy
The Safra Fácil NDVI feature is a P1 priority expansion designed to address the critical pain point of late crop stress detection and enable proactive field management.
• Target Audience: The feature targets small to large-scale Brazilian farmers, specifically aiming at the 96.5% of Brazilian farms that fall into the small and medium segments. The overall target segment consists of over 850,000 medium-to-large producers (over 50 hectares).
• Value Proposition: By enabling early stress detection, the platform expects to facilitate a 15–25% yield improvement for farmers.
• Revenue Model: Advanced NDVI features, including alerts and time series analysis, are a key differentiator for the Pro tier subscription, currently priced at R$29 per month.
• Competitive Edge: The platform is positioned to be the first in Brazil to combine NDVI monitoring with air quality data.
Key Functionalities
The platform utilizes satellite data and processing via Google Earth Engine (GEE) to deliver three core services: visualization, alert-based change detection, and resource optimization.
1. NDVI Map Visualization
Farmers receive a current, color-coded map of their field's crop health to identify problem areas before they become visible on the ground.
• Data Sources: It uses NASA's Harmonized Landsat and Sentinel-2 (HLS) data.
    ◦ The primary source is Sentinel-2, offering 10m resolution and a 5-day revisit frequency.
    ◦ The fallback is Landsat-8/9, providing 30m resolution and a 16-day revisit frequency.
• Frequency: The system displays the most recent cloud-free imagery available within the last 7 days.
• Classification: Crop health is displayed using a traffic light system:
    ◦ 🔴 Low Health (NDVI < 0.3): Indicates stress, disease, or poor growth.
    ◦ 🟡 Moderate Health (NDVI 0.3–0.6): Represents average vegetation vigor.
    ◦ 🟢 High Health (NDVI > 0.6): Indicates healthy, vigorous crops.
• Mobile Design: The interface is mobile-first, using optimized image compression for 3G networks and large, clear color zones readable in sunlight. It uses Portuguese labels, such as "Saúde da Cultura" (Crop Health) instead of "NDVI".
2. 30-Day Baseline Differential Alerts
This trend-based alert system provides robustness against daily noise and false positives.
• Baseline Logic: The system compares the current NDVI reading against a 30-day rolling average historical baseline.
• Trigger Condition: An alert is triggered if there is a greater than 15% decline in the mean NDVI and the affected area is greater than 5 hectares OR more than 10% of the field.
• Delivery: Alerts are designed to be sent via WhatsApp Integration with detailed messages that include the percentage decline, affected area, and potential causes (e.g., water stress, pests).
3. Variable Rate Application (VRA) Analysis
The platform generates recommendations for Variable Rate Application of inputs, such as fertilizers, to combat inefficient nutrient application.
• Metric: The analysis uses the standard deviation of the NDVI (std_ndvi) to classify field uniformity.
• Classification Logic and Economic Impact:
    ◦ High Variability (\text{std\_ndvi} > 0.2): Strong VRA opportunity, recommending 3 management zones, with estimated savings of R$80–120/hectare.
    ◦ Medium Variability (\text{std\_ndvi} > 0.15): Moderate VRA opportunity, recommending 2 management zones, with estimated savings of R$40–80/hectare.
    ◦ Low Variability (\text{std\_ndvi} \le 0.15): Uniform application is recommended, as the field has low variability.
• Potential Savings: For a large coffee field test case, VRA analysis estimated potential fertilizer savings between R$455,180 and R$910,361.
Technical Architecture and Implementation
The technical foundation relies heavily on NASA data processed via cloud infrastructure.
• Data Processing: The data pipeline runs through Google Earth Engine (GEE) for core processing, including NDVI calculation and cloud masking. The system employs automated cloud masking using the HLS Fmask QA band.
• Adaptive Band Selection: To ensure robustness across diverse imagery, the system implements an adaptive band selection logic to correctly identify and use the correct Near-Infrared (NIR) and Red bands, whether the image is from Sentinel-2 (B8 or B8A) or Landsat (B05).
• Technology Stack: The backend uses Python and the GEE API, with PostGIS for field boundary storage, and map tiles cached via CDN (Cloudflare R2/AWS S3).
• Performance Goals: Technical success is measured by achieving data freshness of less than 7 days for cloud-free imagery, processing time of less than 30 seconds, and map load time of less than 3 seconds on 3G networks.