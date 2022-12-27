// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaskSquareBulkSvg from '@ant-design/icons-svg/lib/asn/TaskSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaskSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaskSquareBulk: TaskSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaskSquareBulkSvg}></AntdIcon>;
};

TaskSquareBulk.displayName = 'TaskSquareBulk';
TaskSquareBulk.inheritAttrs = false;
export default TaskSquareBulk;