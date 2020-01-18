# Welcome to the PicUP.AI API User Guide

**PicUP.AI API**

Hi, developers, welcome to use PicUP.AI's API. The following are some basic introductions to your access service. Hope you can find the AI ​​technology capabilities that are suitable for your business here. Thank you for using!

## Quick start
### Obtain API Key
[Click to get your exclusive API Key](http://www.picup.ai/userCenter.html#/userCenter/secret)
### Simple call example
Use the http post protocol to upload pictures and call the portrait cutout API
> Note：Content-Type is "multipart/form-data"

```shellcommand
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
     -F 'file=@/home/roy/images/1.jpg'     \
     -f http://www.picup.ai/api/v1/matting (for object matting, please use   http://www.picup.ai/api/v1/matting?mattingType=2) \
     -o out.png
```

## Portrait cutout and background removal
Identify the outline of the human body in the image, separate it from the background, and return the segmented Alpha layer and foreground layer, adapting to multi-person image, complex backgrounds, variety of postures and positions such as overlapping, occlusion, back view, side view and so on, as well as many kinds of accessories including hair accessories, hats, glasses, shoes, bags, etc.
### Application Scenario
#### Portrait cutout
Separate the portrait in the original picture, select a new background image for replacement and synthesis; at the same time, you can blur the background to highlight the portrait and achieve a large aperture portrait photo
#### Human body special effects
In a live video, the user's body contour is identified, and various background special effects and sticker props can be added to the portrait in real time, providing a richer entertainment experience.
#### Film and television post processing
Identify portrait areas in a film or television episode, and apply post-processing such as one-click portrait cutout, background replacement, and background blurring.
### Frequently asked questions  
Q: What input image format does it support?
A: It supports PNG, JPG, JPEG, BMP, and GIF files.

Q: Is there any limitation on the size of the supported image?
A: Currently the maximum upload resolution is 2000x2000, and the image file size is limited to 10MB.
### Service fee
You can purchase/recharge API calls through online payment.
The more purchases, the cheaper per image.
There is expiration date on the purchased calls.
Register now to get 10 free calls.
[View our price list](http://www.picup.ai/userVip.html)

### Customizable
For customers who need special service, you can contact us by email[pikachu@picup.ai](mailto:pikachu@picup.ai)or Facebook Messenger  xxx or WhatsApp xxx.。
### API documentation
#### Interface description
The user requests the service to cutout the person in an image, and the server returns a PNG picture of the person.
#### Request description
**Request example**

HTTP method: POST
request URL:`http://www.picup.ai/api/v1/matting (物体抠图请用  http://www.picup.ai/api/v1/matting?mattingType=2)`  
  
The header is as follows:

| parameter | value |
| ------ | ------ |
| Content-Type	 | multipart/form-data |
| APIKEY | [Your Exclusive API Key](http://www.picup.ai/userCenter.html#/userCenter/secret) | 
  
The request parameters are placed in the body. The parameter details are as follows: 

| parameter | value |
| ------ | ------ |
| file	 | Picture file |

return

The return is an image resource with content-type image / png. If an error occurs, the status code is a standard http 50x series error

#### Request restrictions

The current API QPS limit is 1 time / second

### SDK
#### Command Line
```shellcommand
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
     -F 'file=@/path/to/file.jpg'     \
     -f http://www.picup.ai/api/v1/matting \ (for object matting, please use   http://www.picup.ai/api/v1/matting?mattingType=2)
     -o out.png
```

#### Python
```python
import requests
response = requests.post(
    'http://www.picup.ai/api/v1/matting', (for object matting, please use   http://www.picup.ai/api/v1/matting?mattingType=2)
    files={'file': open('/path/to/file.jpg', 'rb')},
    headers={'APIKEY': 'INSERT_YOUR_API_KEY_HERE'},
)
with open('out.png', 'wb') as out:
    out.write(response.content)
```

#### PHP
```php
$client = new GuzzleHttp\Client();
$res = $client->post('http://www.picup.ai/api/v1/matting (for object matting, please use   http://www.picup.ai/api/v1/matting?mattingType=2)', [
    'multipart' => [
        [
            'name'     => 'file',
            'contents' => fopen('/path/to/file.jpg', 'r')
        ]
    ],
    'headers' => [
        'APIKEY' => 'INSERT_YOUR_API_KEY_HERE'
    ]
]);

$fp = fopen("out.png", "wb");
fwrite($fp, $res->getBody());
fclose($fp);
```

#### Java(spring boot)
```java
@Autowired
private RestTemplate restTemplate;

File file = new File("/path/to/file.jpg");
byte[] bytesArray = new byte[(int) file.length()];

FileInputStream fis = new FileInputStream(file);
fis.read(bytesArray); //read file into bytes[]
fis.close();
MultipartBodyBuilder builder = new MultipartBodyBuilder();
builder.part("file",bytesArray,MediaType.IMAGE_JPEG);
HttpHeaders headers = new HttpHeaders();
headers.setContentType(MediaType.MULTIPART_FORM_DATA);
headers.add("APIKEY","INSERT_YOUR_API_KEY_HERE");
HttpEntity<MultiValueMap> request= new HttpEntity<>(builder.build(),headers);
entity = restTemplate.postForEntity("http://www.picup.ai/api/v1/matting (for object matting, please use   http://www.picup.ai/api/v1/matting?mattingType=2)", request, Resource.class);

//todo: your logic to deal with entity
```

