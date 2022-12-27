// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CommandSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/CommandSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CommandSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CommandSquareOutline: CommandSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommandSquareOutlineSvg}></AntdIcon>;
};

CommandSquareOutline.displayName = 'CommandSquareOutline';
CommandSquareOutline.inheritAttrs = false;
export default CommandSquareOutline;