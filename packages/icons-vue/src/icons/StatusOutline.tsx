// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StatusOutlineSvg from '@ant-design/icons-svg/lib/asn/StatusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StatusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StatusOutline: StatusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StatusOutlineSvg}></AntdIcon>;
};

StatusOutline.displayName = 'StatusOutline';
StatusOutline.inheritAttrs = false;
export default StatusOutline;