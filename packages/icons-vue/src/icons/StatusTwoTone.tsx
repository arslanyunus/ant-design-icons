// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StatusTwoToneSvg from '@ant-design/icons-svg/lib/asn/StatusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StatusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StatusTwoTone: StatusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StatusTwoToneSvg}></AntdIcon>;
};

StatusTwoTone.displayName = 'StatusTwoTone';
StatusTwoTone.inheritAttrs = false;
export default StatusTwoTone;