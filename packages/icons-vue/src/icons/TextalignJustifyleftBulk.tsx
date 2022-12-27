// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifyleftBulkSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifyleftBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifyleftBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifyleftBulk: TextalignJustifyleftBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifyleftBulkSvg}></AntdIcon>;
};

TextalignJustifyleftBulk.displayName = 'TextalignJustifyleftBulk';
TextalignJustifyleftBulk.inheritAttrs = false;
export default TextalignJustifyleftBulk;