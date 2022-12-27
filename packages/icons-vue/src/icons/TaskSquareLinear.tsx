// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaskSquareLinearSvg from '@ant-design/icons-svg/lib/asn/TaskSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaskSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaskSquareLinear: TaskSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaskSquareLinearSvg}></AntdIcon>;
};

TaskSquareLinear.displayName = 'TaskSquareLinear';
TaskSquareLinear.inheritAttrs = false;
export default TaskSquareLinear;