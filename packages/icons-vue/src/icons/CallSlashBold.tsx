// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallSlashBoldSvg from '@ant-design/icons-svg/lib/asn/CallSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallSlashBold: CallSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallSlashBoldSvg}></AntdIcon>;
};

CallSlashBold.displayName = 'CallSlashBold';
CallSlashBold.inheritAttrs = false;
export default CallSlashBold;