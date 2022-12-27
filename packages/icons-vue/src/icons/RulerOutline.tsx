// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RulerOutlineSvg from '@ant-design/icons-svg/lib/asn/RulerOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RulerOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RulerOutline: RulerOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RulerOutlineSvg}></AntdIcon>;
};

RulerOutline.displayName = 'RulerOutline';
RulerOutline.inheritAttrs = false;
export default RulerOutline;