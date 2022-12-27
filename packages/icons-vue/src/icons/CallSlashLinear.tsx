// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallSlashLinearSvg from '@ant-design/icons-svg/lib/asn/CallSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallSlashLinear: CallSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallSlashLinearSvg}></AntdIcon>;
};

CallSlashLinear.displayName = 'CallSlashLinear';
CallSlashLinear.inheritAttrs = false;
export default CallSlashLinear;