// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextBoldBulkSvg from '@ant-design/icons-svg/lib/asn/TextBoldBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextBoldBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextBoldBulk: TextBoldBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextBoldBulkSvg}></AntdIcon>;
};

TextBoldBulk.displayName = 'TextBoldBulk';
TextBoldBulk.inheritAttrs = false;
export default TextBoldBulk;