// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaskSquareBoldSvg from '@ant-design/icons-svg/lib/asn/TaskSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaskSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaskSquareBold: TaskSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaskSquareBoldSvg}></AntdIcon>;
};

TaskSquareBold.displayName = 'TaskSquareBold';
TaskSquareBold.inheritAttrs = false;
export default TaskSquareBold;