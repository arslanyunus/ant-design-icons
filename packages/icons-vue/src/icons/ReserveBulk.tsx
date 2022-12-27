// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReserveBulkSvg from '@ant-design/icons-svg/lib/asn/ReserveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReserveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReserveBulk: ReserveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReserveBulkSvg}></AntdIcon>;
};

ReserveBulk.displayName = 'ReserveBulk';
ReserveBulk.inheritAttrs = false;
export default ReserveBulk;