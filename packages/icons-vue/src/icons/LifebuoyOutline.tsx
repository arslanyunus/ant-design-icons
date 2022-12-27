// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LifebuoyOutlineSvg from '@ant-design/icons-svg/lib/asn/LifebuoyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LifebuoyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LifebuoyOutline: LifebuoyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LifebuoyOutlineSvg}></AntdIcon>;
};

LifebuoyOutline.displayName = 'LifebuoyOutline';
LifebuoyOutline.inheritAttrs = false;
export default LifebuoyOutline;