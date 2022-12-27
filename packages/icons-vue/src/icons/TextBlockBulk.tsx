// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextBlockBulkSvg from '@ant-design/icons-svg/lib/asn/TextBlockBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextBlockBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextBlockBulk: TextBlockBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextBlockBulkSvg}></AntdIcon>;
};

TextBlockBulk.displayName = 'TextBlockBulk';
TextBlockBulk.inheritAttrs = false;
export default TextBlockBulk;