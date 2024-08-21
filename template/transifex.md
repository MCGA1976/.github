# Transifex Github YML 配置

> **以 `git:` 开头**



### `filters:`下

- filter_type: 有三种有效值：file、dir 和 dynamic。**(必须)**

  | 值      | 作用                               |
  | ------- | ---------------------------------- |
  | dir     | 匹配指定目录下的所有符合条件的文件 |
  | dynamic | 使用正则表达式或通配符匹配一组文件 |
  | file    | 精确匹配单个文件                   |

  

- source_file: 仅用于 filter_type 中 file 类型。后填文件位置，位置不应以正斜杠开头，也不应包含双引号或单引号。

- source_file_dir: 仅用于 filter_type 中 dir 类型，后填目录位置，位置不应以正斜杠开头，也不应包含双引号或单引号。

- source_file_extension: 仅用于 filter_type 中 dir 类型，后填扩展名(eg. .po)意为只处理此扩展名。

- source_files_expression: 仅用于 filter_type 中 dynamic 类型，后填正则表达式。

- source_language: 项目的源语言，此填创建项目时选择的语言。**(必须)**

- translation_files_expression: 翻译后文件保存路径正则表达式，必须包含 <lang> 关键字表语言不同，表达式不可以正斜杠开头，并应以单引号包含。**(必须)**

- file_format: 设置资源的类型，有关每个可用格式的 i18n 类型请参阅 [Transifex Help Center](https://help.transifex.com/en/collections/3511306-for-developers#file-formats)。(eg. UNICODEPROPERTIES)

- ignore_dirs：排除一个或多个目录/文件夹。（包括绝对路径）

- ignore_files：排除一个或多个本地化文件。（包括绝对路径）



### **`settings:`下**

- language_mapping：设置自定义<lang>一对一语言映射，子行为*Transifex支持的语言代码:所需保存语言代码*。
- pr_branch_name：指定 PR 的名称。参数 br_unique_id 是系统自动生成的字符串哈希。





