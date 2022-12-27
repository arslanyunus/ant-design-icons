// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaskBulkSvg from '@ant-design/icons-svg/lib/asn/TaskBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaskBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaskBulk: TaskBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaskBulkSvg}></AntdIcon>;
};

TaskBulk.displayName = 'TaskBulk';
TaskBulk.inheritAttrs = false;
export default TaskBulk;