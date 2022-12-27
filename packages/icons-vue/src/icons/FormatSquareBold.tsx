// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FormatSquareBoldSvg from '@ant-design/icons-svg/lib/asn/FormatSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FormatSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FormatSquareBold: FormatSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormatSquareBoldSvg}></AntdIcon>;
};

FormatSquareBold.displayName = 'FormatSquareBold';
FormatSquareBold.inheritAttrs = false;
export default FormatSquareBold;