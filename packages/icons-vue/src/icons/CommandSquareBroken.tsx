// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CommandSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/CommandSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CommandSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CommandSquareBroken: CommandSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommandSquareBrokenSvg}></AntdIcon>;
};

CommandSquareBroken.displayName = 'CommandSquareBroken';
CommandSquareBroken.inheritAttrs = false;
export default CommandSquareBroken;