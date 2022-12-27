// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RulerBoldSvg from '@ant-design/icons-svg/lib/asn/RulerBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RulerBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RulerBold: RulerBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RulerBoldSvg}></AntdIcon>;
};

RulerBold.displayName = 'RulerBold';
RulerBold.inheritAttrs = false;
export default RulerBold;