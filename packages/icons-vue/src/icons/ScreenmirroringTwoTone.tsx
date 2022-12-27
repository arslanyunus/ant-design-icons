// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScreenmirroringTwoToneSvg from '@ant-design/icons-svg/lib/asn/ScreenmirroringTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScreenmirroringTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScreenmirroringTwoTone: ScreenmirroringTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScreenmirroringTwoToneSvg}></AntdIcon>;
};

ScreenmirroringTwoTone.displayName = 'ScreenmirroringTwoTone';
ScreenmirroringTwoTone.inheritAttrs = false;
export default ScreenmirroringTwoTone;