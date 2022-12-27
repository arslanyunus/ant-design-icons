// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CommandOutlineSvg from '@ant-design/icons-svg/lib/asn/CommandOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CommandOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CommandOutline: CommandOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommandOutlineSvg}></AntdIcon>;
};

CommandOutline.displayName = 'CommandOutline';
CommandOutline.inheritAttrs = false;
export default CommandOutline;