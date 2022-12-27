// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ActivityBulkSvg from '@ant-design/icons-svg/lib/asn/ActivityBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ActivityBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ActivityBulk: ActivityBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ActivityBulkSvg}></AntdIcon>;
};

ActivityBulk.displayName = 'ActivityBulk';
ActivityBulk.inheritAttrs = false;
export default ActivityBulk;