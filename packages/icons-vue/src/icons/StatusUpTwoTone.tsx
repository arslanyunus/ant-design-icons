// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StatusUpTwoToneSvg from '@ant-design/icons-svg/lib/asn/StatusUpTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StatusUpTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StatusUpTwoTone: StatusUpTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StatusUpTwoToneSvg}></AntdIcon>;
};

StatusUpTwoTone.displayName = 'StatusUpTwoTone';
StatusUpTwoTone.inheritAttrs = false;
export default StatusUpTwoTone;