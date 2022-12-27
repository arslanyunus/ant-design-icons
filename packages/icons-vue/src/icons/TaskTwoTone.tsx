// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaskTwoToneSvg from '@ant-design/icons-svg/lib/asn/TaskTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaskTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaskTwoTone: TaskTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaskTwoToneSvg}></AntdIcon>;
};

TaskTwoTone.displayName = 'TaskTwoTone';
TaskTwoTone.inheritAttrs = false;
export default TaskTwoTone;