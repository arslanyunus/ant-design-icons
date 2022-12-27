// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaskSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/TaskSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaskSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaskSquareTwoTone: TaskSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaskSquareTwoToneSvg}></AntdIcon>;
};

TaskSquareTwoTone.displayName = 'TaskSquareTwoTone';
TaskSquareTwoTone.inheritAttrs = false;
export default TaskSquareTwoTone;