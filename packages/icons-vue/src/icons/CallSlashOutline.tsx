// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/CallSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallSlashOutline: CallSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallSlashOutlineSvg}></AntdIcon>;
};

CallSlashOutline.displayName = 'CallSlashOutline';
CallSlashOutline.inheritAttrs = false;
export default CallSlashOutline;