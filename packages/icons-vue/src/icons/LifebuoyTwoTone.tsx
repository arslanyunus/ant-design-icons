// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LifebuoyTwoToneSvg from '@ant-design/icons-svg/lib/asn/LifebuoyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LifebuoyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LifebuoyTwoTone: LifebuoyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LifebuoyTwoToneSvg}></AntdIcon>;
};

LifebuoyTwoTone.displayName = 'LifebuoyTwoTone';
LifebuoyTwoTone.inheritAttrs = false;
export default LifebuoyTwoTone;