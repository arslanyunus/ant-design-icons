// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignBottomBoldSvg from '@ant-design/icons-svg/lib/asn/AlignBottomBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignBottomBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignBottomBold: AlignBottomBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignBottomBoldSvg}></AntdIcon>;
};

AlignBottomBold.displayName = 'AlignBottomBold';
AlignBottomBold.inheritAttrs = false;
export default AlignBottomBold;