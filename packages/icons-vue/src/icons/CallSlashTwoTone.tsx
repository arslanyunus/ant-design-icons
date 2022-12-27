// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/CallSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallSlashTwoTone: CallSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallSlashTwoToneSvg}></AntdIcon>;
};

CallSlashTwoTone.displayName = 'CallSlashTwoTone';
CallSlashTwoTone.inheritAttrs = false;
export default CallSlashTwoTone;