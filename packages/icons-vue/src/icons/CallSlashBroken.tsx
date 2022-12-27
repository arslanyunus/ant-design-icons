// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/CallSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallSlashBroken: CallSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallSlashBrokenSvg}></AntdIcon>;
};

CallSlashBroken.displayName = 'CallSlashBroken';
CallSlashBroken.inheritAttrs = false;
export default CallSlashBroken;