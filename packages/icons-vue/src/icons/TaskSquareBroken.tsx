// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaskSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/TaskSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaskSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaskSquareBroken: TaskSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaskSquareBrokenSvg}></AntdIcon>;
};

TaskSquareBroken.displayName = 'TaskSquareBroken';
TaskSquareBroken.inheritAttrs = false;
export default TaskSquareBroken;