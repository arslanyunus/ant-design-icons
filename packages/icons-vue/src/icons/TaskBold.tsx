// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaskBoldSvg from '@ant-design/icons-svg/lib/asn/TaskBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaskBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaskBold: TaskBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaskBoldSvg}></AntdIcon>;
};

TaskBold.displayName = 'TaskBold';
TaskBold.inheritAttrs = false;
export default TaskBold;