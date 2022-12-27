// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CommandTwoToneSvg from '@ant-design/icons-svg/lib/asn/CommandTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CommandTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CommandTwoTone: CommandTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommandTwoToneSvg}></AntdIcon>;
};

CommandTwoTone.displayName = 'CommandTwoTone';
CommandTwoTone.inheritAttrs = false;
export default CommandTwoTone;