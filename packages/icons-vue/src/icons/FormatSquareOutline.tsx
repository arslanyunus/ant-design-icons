// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FormatSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/FormatSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FormatSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FormatSquareOutline: FormatSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormatSquareOutlineSvg}></AntdIcon>;
};

FormatSquareOutline.displayName = 'FormatSquareOutline';
FormatSquareOutline.inheritAttrs = false;
export default FormatSquareOutline;