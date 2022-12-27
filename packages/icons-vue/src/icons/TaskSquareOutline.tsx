// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaskSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/TaskSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaskSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaskSquareOutline: TaskSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaskSquareOutlineSvg}></AntdIcon>;
};

TaskSquareOutline.displayName = 'TaskSquareOutline';
TaskSquareOutline.inheritAttrs = false;
export default TaskSquareOutline;