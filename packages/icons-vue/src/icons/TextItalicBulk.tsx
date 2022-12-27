// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextItalicBulkSvg from '@ant-design/icons-svg/lib/asn/TextItalicBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextItalicBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextItalicBulk: TextItalicBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextItalicBulkSvg}></AntdIcon>;
};

TextItalicBulk.displayName = 'TextItalicBulk';
TextItalicBulk.inheritAttrs = false;
export default TextItalicBulk;