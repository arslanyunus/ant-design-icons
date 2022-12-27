// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LifebuoyBrokenSvg from '@ant-design/icons-svg/lib/asn/LifebuoyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LifebuoyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LifebuoyBroken: LifebuoyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LifebuoyBrokenSvg}></AntdIcon>;
};

LifebuoyBroken.displayName = 'LifebuoyBroken';
LifebuoyBroken.inheritAttrs = false;
export default LifebuoyBroken;