INSERT INTO customers (
    first_name, last_name, email, phone, address1, address2, city, county, post_code, notes, active, created_at, updated_at
) VALUES
    ('Dayo', 'Danebill', 'john.doe@example.com', '0789-456-7890', '123 Main St', 'Apt 4B', 'Bedford', 'Bedfordshire', 'BD5 8YU', 'Customer since 2020', true, now(), now()),
    ('Paul', 'Smith', 'paul.smith@example.com', '07987-654-3210', '456 Oak St', NULL, 'Cheshire', 'Cheshire', 'CH4 6TG', 'VIP customer', true, now(), now()),
    ('John', 'Johnson', 'alice.johnson@example.com', '07555-123-4567', '789 Pine St', 'Suite 100', 'Cumbria', 'CMA', 'CM2 4KL', NULL, true, now(), now()),
    ('Bob', 'Brownie', 'bob.brown@example.com', '07444-555-6666', '321 Maple St', NULL, 'Derby', 'Derbyshire', 'DB6 7TY', 'Preferred customer', true, now(), now()),
    ('Charlie', 'Davison', 'charlie.davis@example.com', '07222-333-4444', '654 Elm St', 'Floor 2', 'Gloucester', 'GLS', 'GL98 7TF', 'New customer', true, now(), now());
