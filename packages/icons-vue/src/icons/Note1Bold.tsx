// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note1BoldSvg from '@ant-design/icons-svg/lib/asn/Note1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note1Bold: Note1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note1BoldSvg}></AntdIcon>;
};

Note1Bold.displayName = 'Note1Bold';
Note1Bold.inheritAttrs = false;
export default Note1Bold;