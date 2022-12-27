// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaskOutlineSvg from '@ant-design/icons-svg/lib/asn/TaskOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaskOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaskOutline: TaskOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaskOutlineSvg}></AntdIcon>;
};

TaskOutline.displayName = 'TaskOutline';
TaskOutline.inheritAttrs = false;
export default TaskOutline;