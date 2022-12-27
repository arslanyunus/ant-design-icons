// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalTwoToneSvg from '@ant-design/icons-svg/lib/asn/GlobalTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalTwoTone: GlobalTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalTwoToneSvg}></AntdIcon>;
};

GlobalTwoTone.displayName = 'GlobalTwoTone';
GlobalTwoTone.inheritAttrs = false;
export default GlobalTwoTone;