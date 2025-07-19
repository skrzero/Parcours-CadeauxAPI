-- Création de la base de données
CREATE DATABASE IF NOT EXISTS birthday_gifts CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Sélection de la base de données
USE birthday_gifts;

-- Création de la table gifts
CREATE TABLE IF NOT EXISTS gifts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL CHECK (price > 0),
    reserved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO gifts (title, description, price, reserved) VALUES
('Montre connectée', 'Modèle sport avec GPS intégré', 199.99, FALSE),
('Écouteurs Bluetooth', 'Bonne autonomie et réduction de bruit', 89.50, TRUE),
('Bon cadeau restaurant', 'Valable dans 50 restaurants', 50.00, FALSE),
('Enceinte portable', 'Étanche, idéale pour l\'extérieur', 69.90, FALSE),
('Coffret spa', 'Massage 1h + accès jacuzzi', 120.00, TRUE);