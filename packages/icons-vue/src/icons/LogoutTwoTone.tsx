// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LogoutTwoToneSvg from '@ant-design/icons-svg/lib/asn/LogoutTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LogoutTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LogoutTwoTone: LogoutTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutTwoToneSvg}></AntdIcon>;
};

LogoutTwoTone.displayName = 'LogoutTwoTone';
LogoutTwoTone.inheritAttrs = false;
export default LogoutTwoTone;