// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaskBrokenSvg from '@ant-design/icons-svg/lib/asn/TaskBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaskBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaskBroken: TaskBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaskBrokenSvg}></AntdIcon>;
};

TaskBroken.displayName = 'TaskBroken';
TaskBroken.inheritAttrs = false;
export default TaskBroken;