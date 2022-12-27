// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaskLinearSvg from '@ant-design/icons-svg/lib/asn/TaskLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaskLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaskLinear: TaskLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaskLinearSvg}></AntdIcon>;
};

TaskLinear.displayName = 'TaskLinear';
TaskLinear.inheritAttrs = false;
export default TaskLinear;