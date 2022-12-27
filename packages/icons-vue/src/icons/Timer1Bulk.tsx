// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Timer1BulkSvg from '@ant-design/icons-svg/lib/asn/Timer1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Timer1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Timer1Bulk: Timer1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Timer1BulkSvg}></AntdIcon>;
};

Timer1Bulk.displayName = 'Timer1Bulk';
Timer1Bulk.inheritAttrs = false;
export default Timer1Bulk;