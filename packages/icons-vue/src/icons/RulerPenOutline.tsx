// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RulerPenOutlineSvg from '@ant-design/icons-svg/lib/asn/RulerPenOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RulerPenOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RulerPenOutline: RulerPenOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RulerPenOutlineSvg}></AntdIcon>;
};

RulerPenOutline.displayName = 'RulerPenOutline';
RulerPenOutline.inheritAttrs = false;
export default RulerPenOutline;