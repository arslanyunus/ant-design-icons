// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note1LinearSvg from '@ant-design/icons-svg/lib/asn/Note1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note1Linear: Note1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note1LinearSvg}></AntdIcon>;
};

Note1Linear.displayName = 'Note1Linear';
Note1Linear.inheritAttrs = false;
export default Note1Linear;