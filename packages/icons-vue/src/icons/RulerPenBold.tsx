// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RulerPenBoldSvg from '@ant-design/icons-svg/lib/asn/RulerPenBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RulerPenBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RulerPenBold: RulerPenBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RulerPenBoldSvg}></AntdIcon>;
};

RulerPenBold.displayName = 'RulerPenBold';
RulerPenBold.inheritAttrs = false;
export default RulerPenBold;