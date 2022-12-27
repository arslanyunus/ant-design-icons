// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LifebuoyBoldSvg from '@ant-design/icons-svg/lib/asn/LifebuoyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LifebuoyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LifebuoyBold: LifebuoyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LifebuoyBoldSvg}></AntdIcon>;
};

LifebuoyBold.displayName = 'LifebuoyBold';
LifebuoyBold.inheritAttrs = false;
export default LifebuoyBold;