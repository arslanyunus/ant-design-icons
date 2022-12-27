// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextBulkSvg from '@ant-design/icons-svg/lib/asn/TextBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextBulk: TextBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextBulkSvg}></AntdIcon>;
};

TextBulk.displayName = 'TextBulk';
TextBulk.inheritAttrs = false;
export default TextBulk;